"use client";

import { composeFunctions } from "@/lib/compose-functions";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type BackButtonProps = PropsWithChildren & ComponentPropsWithoutRef<"button">;

const BackButton = (props: BackButtonProps) => {
  const { onClick: onClickProp, ...rest } = props;

  const router = useRouter();

  const onClick = composeFunctions(onClickProp, () => router.back());

  return <button type="button" onClick={onClick} {...rest} />;
};

export { BackButton };
