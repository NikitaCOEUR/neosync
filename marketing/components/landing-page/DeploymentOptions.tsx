import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import SignupForm from '../buttons/SignupForm';
import { Button } from '../ui/button';

export default function DeploymentOptions(): ReactElement {
  return (
    <div className="px-6">
      <div className="text-gray-900 font-semibold text-2xl lg:text-4xl font-satoshi text-center">
        Flexible Deployment Options
      </div>
      <div className="text-md text-gray-700 font-satoshi font-semibold pt-10 lg:px-60 text-center">
        Whether you decide to host Neosync yourself or use Neoysnc Cloud,
        you&apos;ll get access to the same powerful features.
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-20 gap-4 o">
        <div className="rounded-xl shadow-xl bg-[#1E1E24] text-white flex-flex-col">
          <div className="flex flex-col gap-4 py-10">
            <Image
              src={'/images/logo_dark_mode.svg'}
              alt="NeosyncLogo"
              className="w-5 object-scale-down ml-10"
              width="64"
              height="20"
            />
            <div className="flex flex-row items-center gap-2 pl-10">
              <div className="text-xl font-semibold">Neosync</div>
              <div className="text-sm">Cloud</div>
            </div>
            <div className="text-sm pl-10">
              Don&apos;t worry about infrastructure and sign up now
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-[188px] ml-10">
                    Neosync Cloud <ArrowRightIcon className="ml-2 h-5 w-8 " />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg bg-white p-6 shadow-xl">
                  <DialogHeader>
                    <div className="flex justify-center pt-10">
                      <Image
                        src="https://assets.nucleuscloud.com/neosync/newbrand/logo_text_light_mode.svg"
                        alt="NeosyncLogo"
                        width="118"
                        height="30"
                      />
                    </div>
                    <DialogTitle className="text-gray-900 text-2xl text-center pt-10">
                      Get access to Neosync Cloud
                    </DialogTitle>
                    <DialogDescription className="pt-6 text-gray-900 text-md text-center">
                      Want to use Neosync but don&apos;t want to host it
                      yourself? Let&apos;s chat.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <SignupForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Image
            src={'/images/ss-dark-new.svg'}
            alt="NeosyncLogo"
            width="624"
            height="280"
            className="w-full rounded-b-xl"
          />
        </div>
        <div className="border border-gray-400 rounded-xl shadow-xl  bg-white flex-flex-col overflow-hidden">
          <div className="flex flex-col gap-4 py-10">
            <Image
              src={'/images/logo_light_mode.svg'}
              alt="NeosyncLogo"
              className="w-5 object-scale-down ml-10"
              width="64"
              height="20"
            />
            <div className="flex flex-row items-center gap-2 pl-10">
              <div className="text-xl font-semibold">Neosync</div>
              <div className="text-sm">Open Source</div>
            </div>

            <div className="text-sm pl-10">
              Deploy using a Helm Chart or Docker Compose file.
            </div>
            <Button className="px-6 w-[188px] ml-10" variant="default">
              <Link href="https://github.com/nucleuscloud/neosync">
                <div className="flex flex-row gap-2">
                  <GitHubLogoIcon className="mr-2 h-5 w-5" /> Open Source
                </div>
              </Link>
            </Button>
          </div>
          <Image
            src={'/images/ss-light-new.svg'}
            alt="NeosyncLogo"
            width="624"
            height="280"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
