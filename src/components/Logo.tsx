import logo from '@/assets/images/logo.svg';

export default function Logo() {
  return (
    <div className="w-[144px] h-[32px] cursor-pointer">
      <img src={logo} alt="equalizer logo" />
    </div>
  );
}
