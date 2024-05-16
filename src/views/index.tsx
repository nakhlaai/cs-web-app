import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.svg";
import Subscribe from "../components/subscribe";

export default function () {
  return (
    <div className="flex grow flex-col p-10">
      <div className="flex grow flex-col items-center justify-center text-center py-6">
        <div>
          <img src={Logo} alt="logo" width="72" />
        </div>
        <p className="text-xl font-light mb-3">
          AI-powered business intelligence platform
        </p>
        <h1 className="text-5xl font-bold my-6">COMING SOON</h1>
        <Subscribe />
      </div>
      <div className="flex flex-row footer">
        <p className="flex grow items-center">© 2024 Nakhla.ai</p>
        <div>
          <a href="https://www.linkedin.com/company/nakhlaai" target="_blank">
            <img src={LinkedIn} alt="linkedin" width="32" />
          </a>
        </div>
      </div>
    </div>
  );
}
