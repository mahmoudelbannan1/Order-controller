import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  // ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('email')
  findByEmail(@Query('email') email: string): any {
    console.log(email);
    return this.userService.findByEmail(email);
  }

  @Get()
  find(): any[] {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): any {
    return this.userService.findById(id);
  }

  //========================Email========================
  //  /users/email/inas@gmail.com
  // @Get('email/:email')
  // findByEmail(@Param('email') email:string):any{
  //     return this.users.find((user)=>user.email===email)
  // }

  // /users/email?email=inas@gmail.com

  //========================================================
  @Post()
  // @UsePipes(ValidationPipe)
  create(@Body() userData: CreateUserDto): CreateUserDto {
    return this.userService.createUser(userData);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userData: UpdateUserDto,
  ): UpdateUserDto {
    return this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.userService.deleteUser(id);
  }
}
