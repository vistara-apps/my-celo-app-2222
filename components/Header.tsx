'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

export function Header() {
  return (
    <header className="border-b-2 border-border p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent"></div>
          <h1 className="text-xl font-bold text-accent">
            CELO Counter
          </h1>
        </div>
        
        <Wallet>
          <ConnectWallet>
            <div className="flex items-center gap-2 btn-secondary">
              <Avatar className="w-6 h-6" />
              <Name />
            </div>
          </ConnectWallet>
        </Wallet>
      </div>
    </header>
  );
}
