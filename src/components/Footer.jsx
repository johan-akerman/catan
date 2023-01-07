import {
  faDice,
  faFastForward,
  faGift,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PurchasableCard from "./PurchasableCard";
import ResourceCard from "./ResourceCard";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";
import TradableResourceCard from "./TradableResourceCard";
import UserCard from "./UserCard";

export default function Footer() {
  let [isOpen, setIsOpen] = useState(false);
  let [tradingWithBank, setTradingWithBank] = useState(false);
  let [dice, setDice] = useState([1, 1]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function throwDice() {
    setDice([randomIntFromInterval(1, 6), randomIntFromInterval(1, 6)]);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <div className="grid grid-cols-9 absolute z-10 bottom-0 w-full gap-2 px-3">
        <div className="col-span-2 bg-white rounded-t-md shadow-2xl p-2">
          <ul>
            <li>
              <strong>Username</strong> rolled 7
            </li>
            <li>
              <strong>Username</strong> got 2 bricks
            </li>
            <li>
              <strong>Username</strong> rolled 4
            </li>
            <li>
              <strong>Username</strong> got 2 bricks
            </li>
            <li>
              <strong>Username</strong> rolled 4
            </li>
            <li>
              <strong>Username</strong> got 2 bricks
            </li>
          </ul>
        </div>

        <div className="col-span-5  gap-12 bg-white shadow-2xl rounded-t-md relative">
          <p className="py-3 text-xl text-center">
            <strong>Username</strong> is placing settlement...
          </p>

          <div className="grid grid-cols-4">
            <div className="grid grid-cols-3 p-2 gap-2">
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </div>

            <div className="col-span-2 grid grid-cols-4 p-2 gap-4">
              <PurchasableCard />
              <PurchasableCard />
              <PurchasableCard />
              <PurchasableCard />
            </div>

            <div className="p-2 gap-2 grid-cols-1 grid">
              <div
                onClick={openModal}
                className="bg-green-500 text-center rounded-lg px-5 py-2 text-white font-bold border-b-4 border-b-green-700 inline-flex items-center cursor-pointer"
              >
                <div className="mx-auto ">
                  <FontAwesomeIcon icon={faShop} className="mr-2" />
                  <span>Shop</span>
                </div>
              </div>
              <div className="bg-green-500 text-center rounded-lg px-5 py-2 text-white font-bold border-b-4 border-b-green-700 inline-flex items-center cursor-pointer">
                <div className="mx-auto">
                  <FontAwesomeIcon icon={faFastForward} className="mr-2" />
                  <span>End turn</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex -top-32 right-0 gap-2 mt-12 text-white text-center text-2xl font-extrabold cursor-pointer"
            onClick={() => throwDice()}
          >
            <div className="h-16 w-16 bg-red-400 rounded-md border-b-red-600 border-b-4 pt-3">
              {dice[0]}
            </div>
            <div className="h-16 w-16 bg-red-400 rounded-md border-b-red-600 border-b-4 pt-3">
              {dice[1]}
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-t-md shadow-2xl p-2">
          <UserCard />
          <UserCard />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex gap-4">
                    <button
                      className={`cursor-pointer px-5 py-2 text-center font-bold inline-flex items-center rounded-lg border-b-4 ${
                        tradingWithBank
                          ? "bg-white text-black border-b-white hover:bg-gray-400 hover:border-b-gray-600"
                          : "bg-green-500 text-white border-b-green-700"
                      } `}
                      onClick={() => setTradingWithBank(false)}
                    >
                      Trade with other players
                    </button>
                    <button
                      className={`cursor-pointer px-5 py-2 text-center font-bold inline-flex items-center rounded-lg border-b-4 ${
                        tradingWithBank
                          ? "bg-green-500 text-white border-b-green-700"
                          : "bg-white text-black border-b-white hover:bg-gray-400 hover:border-b-gray-600"
                      } `}
                      onClick={() => setTradingWithBank(true)}
                    >
                      Trade with the bank
                    </button>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-semibold text-lg mb-2">Offer</h2>
                    <div className="flex gap-4">
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                    </div>

                    <h2 className="font-semibold text-lg mt-6 mb-2">For</h2>
                    <div className="flex gap-4">
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                      <TradableResourceCard />
                    </div>
                    <div className="mx-auto flex w-52 mt-8 bg-green-500 text-center rounded-lg px-5 py-2 text-white font-bold border-b-4 border-b-green-700  items-center cursor-pointer">
                      <div className="mx-auto">
                        <FontAwesomeIcon icon={faGift} className="mr-2" />
                        <span>Propose trade</span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
