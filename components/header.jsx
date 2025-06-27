import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image"; 

const Header = () => {
    return  <header>
        <nav>
            <Link href="/">
              <Image
              src ="/logo.png" 
              alt="CareerIQ Logo" 
              width={200} 
              height={60} 
              className= "h-20 py-1 w-auto object-fill" />
            </Link>
        </nav>

        <SignedOut>
            <SignInButton/>    
            </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </header>;
};

export default Header;