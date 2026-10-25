/**
 * The Torres Strait Islander Flag, designed by the late Bernard Namok.
 * Copyright: Torres Strait Island Regional Council, which asks for written permission to reproduce it.
 * Colours follow the official PMS 340 (green) and PMS 072 (blue).
 */
export function TorresStraitFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 114.3 57.15" className={className} role="img" aria-label="Torres Strait Islander Flag, designed by Bernard Namok">
      <rect width="114.3" height="57.15" fill="#00965e" />
      <path d="M0 13.49375v30.1625H114.3V13.49375" fill="#000" />
      <path d="M0 15.08125v26.9875H114.3V15.08125" fill="#10069f" />
      <path
        d="m58.210797 29.203338-1.061658-3.347448-1.057938 3.347448-3.511162-.02729 2.856308 2.04022-1.111269 3.331325 2.824061-2.084869 2.82406 2.084869-1.108788-3.331325 2.855067-2.04022z"
        fill="#fff"
      />
      <path
        d="m58.68296 16.139585.0087.02853-1.541637 5.20535-1.532955-5.233876C39.105535 19.671831 46.565669 34.0129 48.543875 37.768392l-4.012225 3.242027 7.102941-2.47927v-9.362685c0-3.043586 2.465627-5.510453 5.510453-5.510453 3.043586 0 5.510453 2.466867 5.510453 5.510453l.0099 9.362685 7.10294 2.47927-4.009744-3.242027C67.734341 34.0129 75.195715 19.671831 58.68296 16.139585"
        fill="#fff"
      />
    </svg>
  );
}
