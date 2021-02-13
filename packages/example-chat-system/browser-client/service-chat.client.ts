// @generated by protobuf-ts 2.0.0-alpha.12 with parameters client_call,optimize_code_size
// @generated from protobuf file "service-chat.proto" (package "spec", syntax proto3)
// tslint:disable
import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ChatService } from "./service-chat";
import { PostResponse } from "./service-chat";
import { PostRequest } from "./service-chat";
import { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import { ChatEvent } from "./service-chat";
import { JoinRequest } from "./service-chat";
import { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service spec.ChatService
 */
export interface IChatServiceClient {
    /**
     * returns a response header "x-token" to authorize Post() calls.
     * streams all chat messages.
     *
     * @generated from protobuf rpc: Join(spec.JoinRequest) returns (stream spec.ChatEvent);
     */
    join(input: JoinRequest, options?: RpcOptions): ServerStreamingCall<JoinRequest, ChatEvent>;
    /**
     * post a message to the chat.
     * must set "x-token" request header obtained from Join().
     *
     * @generated from protobuf rpc: Post(spec.PostRequest) returns (spec.PostResponse);
     */
    post(input: PostRequest, options?: RpcOptions): UnaryCall<PostRequest, PostResponse>;
}
/**
 * @generated from protobuf service spec.ChatService
 */
export class ChatServiceClient implements IChatServiceClient, ServiceInfo {
    typeName = ChatService.typeName;
    methods = ChatService.methods;
    options = ChatService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * returns a response header "x-token" to authorize Post() calls.
     * streams all chat messages.
     *
     * @generated from protobuf rpc: Join(spec.JoinRequest) returns (stream spec.ChatEvent);
     */
    join(input: JoinRequest, options?: RpcOptions): ServerStreamingCall<JoinRequest, ChatEvent> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<JoinRequest, ChatEvent>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * post a message to the chat.
     * must set "x-token" request header obtained from Join().
     *
     * @generated from protobuf rpc: Post(spec.PostRequest) returns (spec.PostResponse);
     */
    post(input: PostRequest, options?: RpcOptions): UnaryCall<PostRequest, PostResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PostRequest, PostResponse>("unary", this._transport, method, opt, input);
    }
}
