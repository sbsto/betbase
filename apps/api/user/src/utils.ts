import { secret } from "encore.dev/config";
import * as jwt from "jsonwebtoken";

const authSecret = secret("AUTH_SECRET")();

export const generateAuthToken = ({
  walletAddress,
  chainId,
}: {
  walletAddress: string;
  chainId: number;
}) => {
  const token = jwt.sign({ walletAddress, chainId }, authSecret, {
    expiresIn: "1h",
  });

  return token;
};
