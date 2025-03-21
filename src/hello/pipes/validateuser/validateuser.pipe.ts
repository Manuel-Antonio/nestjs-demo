import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const ageNum = parseInt(value.age.toString(), 10);
    
    if (isNaN(ageNum)) {
      throw new HttpException("La edad debería ser un número", HttpStatus.BAD_REQUEST)
    }
    return {
      ...value,
      age: ageNum
    };
  }
}
