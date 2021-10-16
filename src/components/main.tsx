import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import {
    shortenAddress,
} from "../utils/candy-machine";
import useCandyMachine from '../hooks/use-candy-machine';
import useWalletBalance from '../hooks/use-wallet-balance';
import Countdown from 'react-countdown';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import ImageCarasol from "./imageCaracol";
import About from "./about";

const Main = () => {
  const [balance] = useWalletBalance()
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const wallet = useWallet();

  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()
  
  return (
    <>
      <main className="flex-grow dark">
        {/* {wallet.connected &&
          <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
        }

        {wallet.connected &&
          <>
            <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
            <p>Available/Minted/Total: {nftsData.itemsRemaining}/{nftsData.itemsRedeemed}/{nftsData.itemsAvailable}</p>
          </>
        } */}
        <div className="p-5">
          <div className="flex justify-between">
            <div className="space-x-1.5">           
              {wallet.connected &&
                <button type="button"
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={onMint}
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ?
                    <span>MINT {isMinting && 'LOADING...'}</span> :
                    <Countdown
                      date={mintStartDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  }
                </button>
              }

              {wallet.connected &&
                <button type="button"
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={() => onMintMultiple(5)}
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ?
                    <span>MINT 5 {isMinting && 'LOADING...'}</span> :
                    <Countdown
                      date={mintStartDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  }
                </button>
              }
            </div>
            <div className="flex justify-end space-x-1.5">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/5"></div>
          <div className="w-3/5 flex flex-col justify-center">
            <About></About>
            <ImageCarasol></ImageCarasol>
          </div>
          <div className="w-1/5"></div>
        </div>
        
      </main>
    </>
  )
};

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <span>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default Main