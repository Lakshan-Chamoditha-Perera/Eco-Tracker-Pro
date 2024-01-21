import { useEffect, useState } from "react";
import ComplainAccordion from "../../../../components/accordion/ComplainAccordion.tsx";
import ServiceRequestAccordion from "../../../../components/accordion/ServiceRequestAccordion.tsx";
import StandardResponse from "../../../../dto/rsp/StandardResponse.tsx";

export interface IOrder {
  _id: string;
  status: string;
  itemlist: [];
  total: number;
  date: Date;
}

const AdminDashboardContent = () => {
  const [ordersList, setOrdersList] = useState<IOrder[]>([]);

  const fetchOrdersList = async () => {
    try {
      const response = await fetch("http://localhost:3001/order/getAll");
      const jsonData: StandardResponse = await response.json();
      setOrdersList(jsonData.data);
      console.log(jsonData.data);
    } catch (err) {}
  };
  useEffect(() => {
    fetchOrdersList();
  }, []);
  return (
    <div className={""}>
      <div
        className={
          "w-0.8 h-[400px] justify-evenly  py-2 grid grid-rows-4 grid-cols-3 gap-5"
        }
      >
        <header
          className={
            "flex flex-row bg-[#D4F2E6] drop-shadow-xl  p-2 col-span-2 row-span-4 h-full rounded-[20px] border-green-950 "
          }
        >
          <div className={"p-5 border-2 w-[60%]"}>
            <h2 className={"text-3xl mb-7  font-medium text-[#0FAF72]"}>
              Welcome Back!
            </h2>
            <p className={"text-[20px]"}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie
            </p>
          </div>
          <img
            className={"object-contain p-5"}
            src={"src/assets/img_client1.png"}
            alt={"profile"}
          />
        </header>
        <div
          className={
            "flex rounded-[20px] col-span-1 row-span-4"
          }
        >
          <div
            className={
              "p-5 border grid grid-rows-5 shadow-lg  rounded-[20px] w-full"
            }
          >
            <h2 className={"text-3xl mb-7  font-medium text-[#0FAF72]"}>
              Recent Orders
            </h2>
            <div className="row-span-4 grid grid-cols-1 max-h-full overflow-y-scroll">
              {ordersList.map((order) => (
                <div
                  key={order._id}
                  className="border p-2 mb-2 rounded-md bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Transaction ID: {order._id}
                  </h3>
                  <p>Total: Rs. {order.total}</p>
                  <p>Status: {order.status}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={"flex w-0.8 justify-evenly h-auto flex-col"}>
        <ul
          className={"grid grid-cols-4 gap-5 h-full py-[40px] justify-evenly"}
        >
          <li
            className={
              "shadow-lg h-[200px] bg-white p-2 border-red-600 border grid-cols-4 rounded-[20px] grid gap-3 grid-rows-3"
            }
          >
            <div
              className={
                "col-span-3 border-blue-400 border flex-col flex items-center justify-around bg-green-500 rounded-[10px]"
              }
            >
              <h1
                className={
                  "text-2xl font-medium flex items-center justify-around text-white"
                }
              >
                Monthly Sales
              </h1>
            </div>
            <div
              className={
                "col-span-4 row-span-2 flex flex-row items-center justify-between"
              }
            >
              <h1
                className={
                  "ml-5 w-full text-6xl border font-medium flex justify-end text-green-500"
                }
              >
                Rs.1000.00
              </h1>
            </div>
          </li>

          <li
            className={
              "shadow-lg h-[200px] bg-white p-2 border-red-600 border grid-cols-4 rounded-[20px] grid gap-3 grid-rows-3"
            }
          >
            <div
              className={
                "col-span-3 border-blue-400 border flex-col flex items-center justify-around bg-green-500 rounded-[10px]"
              }
            >
              <h1
                className={
                  "text-2xl font-medium flex items-center justify-around text-white"
                }
              >
                Service Sales
              </h1>
            </div>
            <div
              className={
                "col-span-4 row-span-2 flex flex-row items-center justify-between"
              }
            >
              <h1
                className={
                  "ml-5 w-full text-6xl border font-medium flex justify-end text-green-500"
                }
              >
                Rs.1000.00
              </h1>
            </div>
          </li>

          <li
            className={
              "shadow-lg h-[200px] bg-white p-2 border-red-600 border grid-cols-4 rounded-[20px] grid gap-3 grid-rows-3"
            }
          >
            <div
              className={
                "col-span-4 border-blue-400 border flex-col flex items-center justify-around bg-green-500 rounded-[10px]"
              }
            >
              <h1
                className={
                  "text-2xl font-medium flex items-center justify-around text-white"
                }
              >
                Wastage Collected
              </h1>
            </div>
            <div
              className={
                "col-span-4 row-span-2 flex flex-row items-center justify-between"
              }
            >
              <h1
                className={
                  "ml-5 w-full text-6xl border font-medium flex justify-end text-green-500"
                }
              >
                250KG
              </h1>
            </div>
          </li>
          <li
            className={
              "shadow-lg h-[200px] bg-white p-2 border-red-600 border grid-cols-4 rounded-[20px] grid gap-3 grid-rows-3"
            }
          >
            <div
              className={
                "col-span-3 border-blue-400 border flex-col flex items-center justify-around bg-green-500 rounded-[10px]"
              }
            >
              <h1
                className={
                  "text-2xl font-medium flex items-center justify-around text-white"
                }
              >
                Registered Users
              </h1>
            </div>
            <div
              className={
                "col-span-4 row-span-2 flex flex-row items-center justify-between"
              }
            >
              <h1
                className={
                  "ml-5 w-full text-6xl border font-medium flex justify-end text-green-500"
                }
              >
                95
              </h1>
            </div>
          </li>
        </ul>
      </div>
      <div className={"flex w-0.8 justify-evenly h-[450px] flex-col"}>
        <div className={"grid grid-cols-4 gap-5 h-full justify-evenly"}>
          <div
            className={
              "shadow-lg bg-white p-3 border col-span-2 rounded-[20px]"
            }
          >
            <h2 className={"text-3xl mb-7  font-medium text-[#0FAF72]"}>
              Service Request
            </h2>
            <div>
              <ServiceRequestAccordion />
            </div>
          </div>
          <div
            className={
              "shadow-lg bg-white p-3 border col-span-2 rounded-[20px]"
            }
          >
            <h2 className={"text-3xl mb-7  font-medium text-[#0FAF72]"}>
              Complains
            </h2>
            <ComplainAccordion />
            <ComplainAccordion />
            <ComplainAccordion />
            <ComplainAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
