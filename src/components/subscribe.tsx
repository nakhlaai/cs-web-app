import React from "react";
import SubscribeUseCase from "../usecases/subscribe";

export default function () {
  const [subscribed, setSubscribed] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = React.useCallback(
    async (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      setDisabled(true);
      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();
      if (email) {
        await SubscribeUseCase(email);
        setSubscribed(true);
      }
      setDisabled(false);
    },
    []
  );

  return (
    <div className="flex flex-col items-center">
      {!subscribed && (
        <div>
          <h2 className="text-xl font-light mb-3">Join the movement!</h2>
          <div className="flex items-center justify-center">
            <form onSubmit={onSubmit}>
              <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                <input
                  disabled={disabled}
                  className="py-3 px-4 bg-gray-200 light:bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button
                  disabled={disabled}
                  className={`
                    py-3 px-4 bg-emerald-700 text-emerald-100 font-semibold uppercase 
                     ${disabled ? "cursor-not-allowed" : "hover:bg-emerald-600"}
                `}
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {subscribed && (
        <div>
          <h2 className="text-xl font-light mb-3">Subscribed!</h2>
        </div>
      )}
    </div>
  );
}
