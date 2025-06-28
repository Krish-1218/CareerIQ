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
              width={300} 
              height={100} 
              className= "h-10 py-1 w-auto object-fill" />
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