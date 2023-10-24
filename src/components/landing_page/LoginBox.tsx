"use client";
import useForm from "@/components/landing_page/hooks/useForm";

const LoginBox = () => {
  const { register } = useForm();
  return (
    <div className="flex flex-col gap-[4rem] rounded-[20px] border border-proj-light-border bg-proj-light-mb p-[2rem] align-middle text-proj-light-mt">
      <div className="">
        <div className="text-center text-[2.5rem]">Messenger App</div>
      </div>
      <div className="flex w-[20rem] flex-col gap-[4rem]">
        <div className="flex flex-col gap-[1rem]">
          <input
            type="text"
            {...register("username")}
            autoComplete="off"
            className="rounded-[20px] border border-proj-light-border px-[5px] focus:outline-none"
          />
          <input
            type="password"
            {...register("password")}
            autoComplete="off"
            className="rounded-[20px] border border-proj-light-border px-[5px] focus:outline-none"
          />
          <button className="rounded-[20px] bg-proj-light-action text-[1.7rem] text-proj-light-mb  hover:backdrop-brightness-75">
            Login
          </button>
        </div>
        <div className="text-center">
          <button className="rounded-[20px] bg-proj-light-st px-[1rem] text-[1.3rem] text-proj-light-mb">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginBox;
