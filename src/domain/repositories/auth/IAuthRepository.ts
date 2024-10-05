import { SignInWithEmailAndPAsswordDTO } from '@/domain/dto/Auth.dto';
import { CreateUserDTO } from '@/domain/dto/User.dto';
import { UserModel } from '@/domain/models/UserModel';

export interface IAuthRepository {
  signUpWithEmailAndPassword (payload: CreateUserDTO): Promise<void>
  me(id: string): Promise<UserModel | null>
  signInWithEmailAndPassword (payload: SignInWithEmailAndPAsswordDTO): Promise<string>
}