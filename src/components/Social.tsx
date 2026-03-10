import SvgIconFacebook from './svgs/IconFacebook';
import SvgIconInstagram from './svgs/IconInstagram';
import SvgIconTwitter from './svgs/IconTwitter';

export default function Social() {
  return (
    <div className="w-[124px] h-[20px] flex gap-[32px]">
      <SvgIconFacebook className="w-[20px] hover:text-orange-custom cursor-pointer transition-all duration-150" />
      <SvgIconInstagram className="w-[20px] hover:text-orange-custom cursor-pointer transition-all duration-150" />
      <SvgIconTwitter className="w-[20px] hover:text-orange-custom cursor-pointer transition-all duration-150" />
    </div>
  );
}
