declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
  }

  export type LucideIcon = ComponentType<LucideProps>;

  export const ArrowUpRight: LucideIcon;
  export const BookOpen: LucideIcon;
  export const FileText: LucideIcon;
  export const FolderGit2: LucideIcon;
  export const Mail: LucideIcon;
  export const UserRound: LucideIcon;

  const icons: Record<string, LucideIcon>;
  export default icons;
}
