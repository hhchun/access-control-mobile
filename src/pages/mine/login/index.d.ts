import Login from "./index.vue";

declare type LoginInstance = InstanceType<typeof Login>;
interface SuccessResult {
  key: string;
}

export default Login;

export { LoginInstance, SuccessResult };
