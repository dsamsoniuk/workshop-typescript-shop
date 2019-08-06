export class RequestError extends Error {
        constructor(public status: number, public message: string = 'server error 123') {
                super(message);
                this.message = `Status: ${status} ${message}`;
                this.name = 'RequestError';
        }
}