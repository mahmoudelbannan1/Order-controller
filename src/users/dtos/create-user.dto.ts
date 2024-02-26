import { IsEmail, IsIn, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50, { message: 'user name must be between 3 and 50 characters' })
  readonly username: string;

  @IsString()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsIn(['EGY', 'KSA', 'USA'])
  readonly country: string;
}
