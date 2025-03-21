import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import {Request, Response} from "express"
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller()
export class HelloController {

    @Get('/hello')
    hello(@Req() request: Request, @Res() response : Response) {
        response.status(200).json({
            message: "Hello word"
        });
    }

    @Get('/notfound')
    @HttpCode(303)
    notfoung() {
        return "Pagina no encontrada"
    }


    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: string) {
        return num + 10
    }

    @Get('/active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof(status));
        return status
    }

    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query : {name : string, age: number}) {
        console.log(typeof(query.name));
        console.log(typeof(query.age));
    }



}
