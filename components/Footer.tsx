import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" px-5 flex min-h-[72px] items-center justify-between border-t border-[#D2D2D2] bg-bgblack  pb-3 pt-5 lg:min-h-[72px] lg:px-8 lg:py-5">
        <a href="/" className="flex items-center gap-2.5 text-fadewhite font-bold text-3xl">
             LeSearch
          <span className="text-base font-medium leading-[normal]">
          </span>
        </a>
        <div className="flex items-center gap-5 px-2 py-2 bg-fadewhite rounded-lg ">
          <Link href={"https://x.com/sanyogsr"} >
            <Image
              unoptimized
              src="/img/x.svg"
              alt="Twitter"
              width={15}
              height={15}
            />
          </Link>
          <Link href={"https://github.com/sanyogsr"} target="_blank">
            <Image
              unoptimized
              src={"/img/github-footer.svg"}
              alt="Github"
              width={16}
              height={16}
            />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
