import Head from "next/head";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { QRCodeCanvas } from "qrcode.react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "../../../utils";

function QrGenerator(props: any) {
  const { inputValue = "www.tasa.com.my" } = props;

  const [size, setSize] = useState(400);

  // download QR code
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-code");
    // @ts-ignore
    const pngUrl = canvas
      // @ts-ignore
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `hello.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const renderSizes = () => {
    return (
      <Menu as="div" className="relative inline-block text-left w-full drop-shadow-2xl z-50">
        <div>
          <Menu.Button className=" text-white bg-drop-down-bg pb-4 pt-4 text-lg  w-full inline-flex justify-center rounded-md border border-drop-down-bg shadow-sm px-4 py-2  font-medium hover:text-gray-700  hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            {size === 400 ? "Size" : `${size} px`}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 mt-1.5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" origin-top-right w-full absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    // href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm "
                    )}
                    onClick={(e: any) => {
                      const { text } = e?.target;
                      setSize(parseInt(text));
                    }}
                  >
                    200
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={(e: any) => {
                      const { text } = e?.target;
                      setSize(parseInt(text));
                    }}
                  >
                    400
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={(e: any) => {
                      const { text } = e?.target;
                      setSize(parseInt(text));
                    }}
                  >
                    600
                  </a>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  return (
    <>
      <div
        className="rounded-3xl h-full p-3 justify-center flex content-center items-center flex-col space-y-10"
        style={{
          backgroundColor: "#00248b",
          minHeight: 700,
        }}
      >
        <div
          className="md:drop-shadow-2xl justify-center flex content-center items-center"
          style={{
            maxWidth: 700,
            maxHeight: 700,
            minWidth: 300,
            minHeight: 300,
          }}
        >
          <QRCodeCanvas
            id="qr-code"
            value={inputValue}
            size={size}
            bgColor="#00248b"
            fgColor="#fff"
            level={"H"}
            includeMargin={true}
          />
        </div>
        <div className="w-6/12">{renderSizes()}</div>

        <div className="mt-3">
          <button
            onClick={downloadQRCode}
            className="border rounded-3xl p-3 w-40 pt-5 pb-5 flex justify-center text-white font-bold cursor-pointer hover:bg-blue-400 bg-blue-500 border-blue-500 drop-shadow-2xl"
            // style={{ backgroundColor: "#3abdfa" }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default QrGenerator;
