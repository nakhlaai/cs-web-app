import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.svg";

export default function () {
  return (
    <div className="flex grow flex-col">
      <div className="flex grow flex-col items-center justify-center p-10 pt-40">
        <div>
          <img src={Logo} alt="logo" width="72" />
        </div>
        <p className="text-gray-300 mb-6">
          AI-powered business intelligence platform
        </p>
        <h1 className="text-4xl font-bold">COMING SOON</h1>
      </div>
      <div className="flex flex-row footer p-10">
          <p className="flex grow items-center text-md text-gray-400">
            © 2024 Nakhla.ai
          </p>
          <div>
            <a href="https://www.linkedin.com/company/nakhlaai" target="_blank">
              <img src={LinkedIn} alt="linkedin" width="32" />
            </a>
          </div>
      </div>
    </div>
  );
}
