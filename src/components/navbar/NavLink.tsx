"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import { NavbarItem } from "@nextui-org/react";

type Props = {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>{label}</NavbarItem>
  )
}