import { JsonRpcResponse } from '../../../dto';
import { PostI } from '../../../dto/PostI';
import { BnbRpcSuite, JsonBnbRpcCall } from '../../../dto/rpc/BnbRpcSuite';
import { LoadBalancer } from '../generic/LoadBalancer';
import { AbstractBnbRpc } from './AbstractBnbRpc';
export declare class BnbLoadBalancerRpc extends AbstractBnbRpc implements BnbRpcSuite {
    protected readonly loadBalancer: LoadBalancer;
    constructor(id: string);
    destroy(): void;
    getRpcNodeUrl(): string;
    rawRpcCall(body: JsonBnbRpcCall): Promise<JsonRpcResponse<any>>;
    protected post<T>(post: PostI): Promise<T>;
}
