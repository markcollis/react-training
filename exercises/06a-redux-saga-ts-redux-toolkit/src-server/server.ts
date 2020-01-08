import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();
const simpleLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Received request: ${req.method} ${req.path} at ${new Date().toLocaleString()}`);
    next();
};

app.use(bodyParser.json());
app.use(simpleLogger);

type UserData = {
    firstName: string,
    lastName: string
}
type StoredUserData = { id: number } & UserData
type UserStore = Array<StoredUserData>

let users: UserStore = [];

app.get('/users', (req: Request, res: Response) => {
    res.send(JSON.stringify(users));
});

interface RequestWithBody<T> extends Request {
    body: T
}

app.post('/users', (req: RequestWithBody<UserData>, res: Response) => {
    const newUser: StoredUserData = { id: users.length + 1, ...req.body };
    users = [...users, newUser];
    res.send(JSON.stringify(newUser));
});

app.listen(3001, () => {
    console.log(`Back end listening on port 3001, started at ${new Date().toLocaleString()}`);
});
