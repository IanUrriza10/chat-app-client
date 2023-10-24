const InitialBox = () => {
  return (
    <div className="flex flex-col gap-[4rem] rounded-[2rem] border border-proj-light-border bg-white p-[2rem] text-lg text-red-200">
      <span className="text-[2.5rem] text-proj-light-mt">Login to App</span>
      <div className="flex flex-col gap-[1rem]">
        <button className="rounded-2xl border bg-proj-light-action px-[1rem] py-[.5rem] text-[2rem] text-white">
          Login
        </button>
        <button className="rounded-2xl bg-proj-light-action px-[1rem] py-[.5rem] text-[2rem] text-proj-light-mb">
          Register
        </button>
      </div>
    </div>
  );
};
export default InitialBox;
