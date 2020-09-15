import { HttpException } from "@nestjs/common";

export class GeneralException extends HttpException {
    constructor(
        type: string,
        errorCode: number,
        message: string,
    ) {
		super({
            success:false,
            data: null,
            error: {
                type,
                code: errorCode,
                message
            }
        }, 200);
    }
}
