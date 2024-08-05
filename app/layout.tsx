/*
 * @Author: oldtimestj 85237486@qq.com
 * @Date: 2024-07-07 00:56:38
 * @LastEditors: oldtimestj 85237486@qq.com
 * @LastEditTime: 2024-07-25 14:20:24
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
