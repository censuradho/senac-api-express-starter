import { CreateUserDTO } from '@/domain/dto/User.dto';

export interface IAuthRepository {
  signUpWithEmailAndPassword (payload: CreateUserDTO): Promise<void>
}