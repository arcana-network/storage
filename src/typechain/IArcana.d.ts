/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IArcanaInterface extends ethers.utils.Interface {
  functions: {
    "setAppName(string)": FunctionFragment;
    "setClientId(string,string)": FunctionFragment;
    "setClientIds(string[],string[])": FunctionFragment;
    "setDefaultLimit(uint256,uint256)": FunctionFragment;
    "setUserLevelLimit(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "setAppName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setClientId",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setClientIds",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserLevelLimit",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "setAppName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClientId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClientIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserLevelLimit",
    data: BytesLike
  ): Result;

  events: {};
}

export class IArcana extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IArcanaInterface;

  functions: {
    setAppName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClientId(
      _client: string,
      _clientId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClientIds(
      _client: string[],
      _clientId: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDefaultLimit(
      _store: BigNumberish,
      _bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserLevelLimit(
      user: string,
      store: BigNumberish,
      bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  setAppName(
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClientId(
    _client: string,
    _clientId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClientIds(
    _client: string[],
    _clientId: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDefaultLimit(
    _store: BigNumberish,
    _bandwidth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserLevelLimit(
    user: string,
    store: BigNumberish,
    bandwidth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setAppName(_name: string, overrides?: CallOverrides): Promise<void>;

    setClientId(
      _client: string,
      _clientId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setClientIds(
      _client: string[],
      _clientId: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultLimit(
      _store: BigNumberish,
      _bandwidth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserLevelLimit(
      user: string,
      store: BigNumberish,
      bandwidth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setAppName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClientId(
      _client: string,
      _clientId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClientIds(
      _client: string[],
      _clientId: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDefaultLimit(
      _store: BigNumberish,
      _bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserLevelLimit(
      user: string,
      store: BigNumberish,
      bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setAppName(
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClientId(
      _client: string,
      _clientId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClientIds(
      _client: string[],
      _clientId: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultLimit(
      _store: BigNumberish,
      _bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserLevelLimit(
      user: string,
      store: BigNumberish,
      bandwidth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}