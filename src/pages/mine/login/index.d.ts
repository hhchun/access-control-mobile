import Login from "@/pages/mine/login/index.vue";

declare type LoginModal = InstanceType<typeof Login>;

declare interface SuccessResult {
  key: string;
}

export { SuccessResult, Login, LoginModal };
