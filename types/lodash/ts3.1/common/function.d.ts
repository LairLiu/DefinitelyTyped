import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.after
         */
        after<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Primitive<T> {
        /**
         * @see _.after
         */
        after<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.after
         */
        after<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>;
    }
    interface LoDashStatic {
        /**
         * @see _.ary
         */
        ary(func: (...args: any[]) => any, n?: number): (...args: any[]) => any;
    }
    interface Function<T> {
        /**
         * @see _.ary
         */
        ary(n?: number): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.ary
         */
        ary(n?: number): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * @see _.before
         */
        before<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Primitive<T> {
        /**
         * @see _.before
         */
        before<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.before
         */
        before<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>;
    }
    interface FunctionBind {
        /**
         * @see _.placeholder
         */
        placeholder: __;
        (func: (...args: any[]) => any, thisArg: any, ...partials: any[]): (...args: any[]) => any;
    }
    interface LoDashStatic {
        /**
         * @see _.bind
         */
        bind: FunctionBind;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(thisArg: any, ...partials: any[]): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(thisArg: any, ...partials: any[]): FunctionChain<(...args: any[]) => any>;
    }
    interface FunctionBindKey {
        placeholder: __;
        (object: object, key: string, ...partials: any[]): (...args: any[]) => any;
    }
    interface LoDashStatic {
        /**
         * @see _.bindKey
         */
        bindKey: FunctionBindKey;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(key: string, ...partials: any[]): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(key: string, ...partials: any[]): FunctionChain<(...args: any[]) => any>;
    }
    interface Curry {
        <T1, R>(func: (t1: T1) => R, arity?: number): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface LoDashStatic {
        /**
         * @see _.curry
         */
        curry: Curry;
    }
    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: __, t2: T2): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2): R;
    }
    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2): CurriedFunction2<T1, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2): CurriedFunction3<T1, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T2, T4, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction2<T1, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: __, t2: T2): CurriedFunction4<T1, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction4<T1, T2, T4, T5, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction3<T2, T4, T5, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction3<T1, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction4<T1, T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction3<T2, T3, T5, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction3<T1, T3, T5, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction3<T1, T2, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction2<T3, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction2<T2, T5, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction2<T1, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: __, t2: __, t3: __, t4: __, t5: T5): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction3<T1, T3, T4, R>;
        (t1: __, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction2<T1, T4, R>;
        (t1: __, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface RightCurriedFunction1<T1, R> {
        (): RightCurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface RightCurriedFunction2<T1, T2, R> {
        (): RightCurriedFunction2<T1, T2, R>;
        (t2: T2): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }
    interface RightCurriedFunction3<T1, T2, T3, R> {
        (): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: __): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface RightCurriedFunction4<T1, T2, T3, T4, R> {
        (): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: __): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: __, t4: __): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: __): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4, t5: __): RightCurriedFunction4<T1, T2, T3, T5, R>;
        (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __, t5: __): RightCurriedFunction4<T1, T2, T4, T5, R>;
        (t3: T3, t4: T4, t5: __): RightCurriedFunction3<T1, T2, T5, R>;
        (t3: T3, t4: __, t5: T5): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction4<T1, T3, T4, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction3<T1, T4, T5, R>;
        (t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction3<T1, T3, T5, R>;
        (t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T1, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: __): RightCurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: __): RightCurriedFunction3<T2, T4, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: __): RightCurriedFunction3<T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction2<T3, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T2, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface Function<T> {
        /**
         * @see _.curry
         */
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? Function<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? Function<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? Function<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? Function<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? Function<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.curry
         */
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? FunctionChain<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? FunctionChain<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? FunctionChain<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? FunctionChain<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? FunctionChain<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            FunctionChain<(...args: any[]) => any>;
    }
    interface CurryRight {
        <T1, R>(func: (t1: T1) => R, arity?: number): RightCurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): RightCurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): RightCurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): RightCurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface LoDashStatic {
        /**
         * @see _.curryRight
         */
        curryRight: CurryRight;
    }
    interface Function<T> {
        /**
         * @see _.curryRight
         */
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? Function<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? Function<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? Function<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? Function<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? Function<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.curryRight
         */
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? FunctionChain<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? FunctionChain<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? FunctionChain<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? FunctionChain<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? FunctionChain<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            FunctionChain<(...args: any[]) => any>;
    }
    interface DebounceSettings {
        /**
         * @see _.leading
         */
        leading?: boolean;
        /**
         * @see _.maxWait
         */
        maxWait?: number;
        /**
         * @see _.trailing
         */
        trailing?: boolean;
    }
    interface LoDashStatic {
        /**
         * @see _.debounce
         */
        debounce<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings): T & Cancelable;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.debounce
         */
        debounce(wait?: number, options?: DebounceSettings): Function<T & Cancelable>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.debounce
         */
        debounce(wait?: number, options?: DebounceSettings): FunctionChain<T & Cancelable>;
    }
    interface LoDashStatic {
        /**
         * @see _.defer
         */
        defer(func: (...args: any[]) => any, ...args: any[]): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): Primitive<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.delay
         */
        delay(func: (...args: any[]) => any, wait: number, ...args: any[]): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(wait: number, ...args: any[]): Primitive<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(wait: number, ...args: any[]): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.flip
         */
        flip<T extends (...args: any) => any>(func: T): T;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.flip
         */
        flip(): this;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.flip
         */
        flip(): this;
    }
    interface MemoizedFunction {
        /**
         * @see _.cache
         */
        cache: MapCache;
    }
    interface LoDashStatic {
        /**
         * @see _.memoize
         */
        memoize: {
            <T extends (...args: any) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): Function<T & MemoizedFunction>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): FunctionChain<T & MemoizedFunction>;
    }
    interface LoDashStatic {
        /**
         * @see _.negate
         */
        negate<T extends any[]>(predicate: (...args: T) => any): (...args: T) => boolean;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.negate
         */
        negate(): Function<(...args: Parameters<T>) => boolean>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.negate
         */
        negate(): FunctionChain<(...args: Parameters<T>) => boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.once
         */
        once<T extends (...args: any) => any>(func: T): T;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.once
         */
        once(): Function<T>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.once
         */
        once(): FunctionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.overArgs
         */
        overArgs(func: (...args: any[]) => any, ...transforms: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * @see _.partial
         */
        partial: Partial;
    }
    type __ = LoDashStatic;
    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
    interface Partial {
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: __, arg2: T2): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, plc2: __, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3): Function1<T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, plc3: __, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <TS extends any[], R>(func: (...ts: TS) => R): (...ts: TS) => R;
        <TS extends any[], T1, R>(func: (t1: T1, ...ts: TS) => R, arg1: T1): (...ts: TS) => R;
        <TS extends any[], T1, T2, R>(func: (t1: T1, t2: T2, ...ts: TS) => R, t1: T1, t2: T2): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3, ...ts: TS) => R, t1: T1, t2: T2, t3: T3): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: TS) => R, t1: T1, t2: T2, t3: T3, t4: T4): (...ts: TS) => R;
        placeholder: __;
    }
    interface Function<T> {
        /**
         * @see _.partial
         */
        partial<T2>(plc1: __, arg2: T2): Function<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): Function<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): Function<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): Function<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): Function<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): Function<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): Function<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2>(arg1: T1, arg2: T2): Function<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1>(arg1: T1): Function<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial(): Function<T extends (...ts: any[]) => any ? T : any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.partial
         */
        partial<T2>(plc1: __, arg2: T2): FunctionChain<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): FunctionChain<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): FunctionChain<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2>(arg1: T1, arg2: T2): FunctionChain<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1>(arg1: T1): FunctionChain<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial(): FunctionChain<T extends (...ts: any[]) => any ? T : any>;
    }
    interface LoDashStatic {
        /**
         * @see _.partialRight
         */
        partialRight: PartialRight;
    }
    interface PartialRight {
        <R>(func: Function0<R>): Function0<R>;
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        <T1, T2, R>(func: Function2<T1, T2, R>): Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: __): Function1<T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg2: T2): Function1<T1, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, plc3: __): Function2<T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, plc3: __): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: __): Function1<T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, plc4: __): Function3<T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, plc4: __): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, plc4: __): Function2<T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, plc4: __): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, plc4: __): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, plc4: __): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Function1<T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>;
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
        placeholder: __;
    }
    interface Function<T> {
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __): Function<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2): Function<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): Function<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __): Function<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): Function<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3): Function<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): Function<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3): Function<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): Function<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): Function<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): Function<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3, plc4: __): Function<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): Function<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): Function<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): Function<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T4>(arg4: T4): Function<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): Function<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3, T4>(arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<TS extends any[]>(...ts: TS): Function<T extends (...args: TS) => infer R ? () => R : any>;
        /**
         * @see _.partialRight
         */
        partialRight(): Function<T extends (...ts: any[]) => any ? T : any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __): FunctionChain<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2): FunctionChain<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): FunctionChain<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __): FunctionChain<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): FunctionChain<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3): FunctionChain<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3): FunctionChain<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): FunctionChain<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3, plc4: __): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T4>(arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3, T4>(arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<TS extends any[]>(...ts: TS): FunctionChain<T extends (...args: TS) => infer R ? () => R : any>;
        /**
         * @see _.partialRight
         */
        partialRight(): FunctionChain<T extends (...ts: any[]) => any ? T : any>;
    }
    interface LoDashStatic {
        /**
         * @see _.rearg
         */
        rearg(func: (...args: any[]) => any, ...indexes: Array<Many<number>>): (...args: any[]) => any;
    }
    interface Function<T> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * @see _.rest
         */
        rest(func: (...args: any[]) => any, start?: number): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.rest
         */
        rest(start?: number): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.rest
         */
        rest(start?: number): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * @see _.spread
         */
        spread<TResult>(func: (...args: any[]) => TResult, start?: number): (...args: any[]) => TResult;
    }
    interface Function<T> {
        /**
         * @see _.spread
         */
        spread(start?: number): Function<(...args: any[]) => ReturnType<T>>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.spread
         */
        spread(start?: number): FunctionChain<(...args: any[]) => ReturnType<T>>;
    }
    interface ThrottleSettings {
        /**
         * @see _.leading
         */
        leading?: boolean;
        /**
         * @see _.trailing
         */
        trailing?: boolean;
    }
    interface LoDashStatic {
        /**
         * @see _.throttle
         */
        throttle<T extends (...args: any) => any>(func: T, wait?: number, options?: ThrottleSettings): T & Cancelable;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.throttle
         */
        throttle(wait?: number, options?: ThrottleSettings): Function<T & Cancelable>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.throttle
         */
        throttle(wait?: number, options?: ThrottleSettings): FunctionChain<T & Cancelable>;
    }
    interface LoDashStatic {
        /**
         * @see _.unary
         */
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }
    interface Function<T> {
        /**
         * @see _.unary
         */
        unary(): Function<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.unary
         */
        unary(): FunctionChain<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.wrap
         */
        wrap<T, TArgs, TResult>(value: T, wrapper: (value: T, ...args: TArgs[]) => TResult): (...args: TArgs[]) => TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): Function<(...args: TArgs[]) => TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): FunctionChain<(...args: TArgs[]) => TResult>;
    }
}
