export interface Driver {
  databaseId: string;
  passord: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}



class PostgresDriver implements Driver {
  constructor(
    public databaseId: string,
    public passord: string,
    public port: number,
    public connect: () => void,
    public disconnect: () => void,
    public isConnected: () => boolean,
  ) {}
}




