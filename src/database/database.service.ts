import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
    private isConnected = false;

    onModuleInit(){
        this.isConnected = true
        console.log('Database is Connected')
    }

    onApplicationShutdown(signal: string){
        this.isConnected = false;
        console.log(`DB DisConnected signal:${signal}`)
    }

    getStatus(){
        return this.isConnected ? 'Connected' : 'Disconnected'
    }
}
