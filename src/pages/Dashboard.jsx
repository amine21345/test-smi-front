import avatar from "../assets/avatars/Image.png";
import award from "../assets/cards icons/award.png";
import calendar from "../assets/cards icons/calendar.png";
import creditCard from "../assets/cards icons/credit-card.png";
import navigation from "../assets/cards icons/navigation.png";
import packages from "../assets/cards icons/package.png";
import share from "../assets/cards icons/share-2.png";
import shop from "../assets/cards icons/shopping-bag.png";
import smartphone from "../assets/cards icons/smartphone.png";
import sun from "../assets/cards icons/sun.png";
import target from "../assets/cards icons/target.png";
import france from "../assets/France.png";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import CustomCard from "../components/ui/CustomCard";
import CustomCircularChart from "../components/ui/CustomCircularChart";
import CustomDatePicker from "../components/ui/CustomDatePicker";
import CustomIcon from "../components/ui/CustomIcon";
import { useDashboard } from "../hooks/useDashboard";

const Dashboard = () => {
  const {
    totalTransactions,
    chiffreAffaire,
    totalInfluencers,
    actifInfluencers,
    panierMoyen,
    bestDevice,
    bestColor,
    bestCategory,
    bestProduct,
    bestDay,
    bestPartOfDay,
    taux,
    bestInfluencer,
    bestCountry,
    loading,
    error,
    options,
    selectedView,
    handleSelectChange,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useDashboard();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <SideMenu />

      <div className="flex-1 flex flex-col items-center p-6">
        <Navbar />

        {/* Title */}
        <div className="flex items-center justify-between w-[90%]">
          <h2 className="text-lg font-semibold w-[90%] text-[#2E2E4D] my-6">
            Vue d’ensemble
          </h2>
          <div>
            <CustomDatePicker
              options={options}
              selectedView={selectedView}
              handleSelectChange={handleSelectChange}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
        </div>
        <h2 className="text-lg font-semibold w-[90%] text-[#2E2E4D] my-6">
          Performances globales
        </h2>

        {/* Performance Cards */}
        <div className="grid grid-cols-12 items-center h-[50vh] gap-5 justify-center w-[90%]">
          <CustomCard className="col-span-4 " loading={loading}>
            <CustomIcon icon={shop} className="bg-rose-100 rounded-full" />
            <h3 className="font-bold text-gray-500 text-xl">
              {chiffreAffaire.chiffreAffaire?.toFixed(0)}€
            </h3>
            <p className="text-sm text-gray-400">CA</p>
          </CustomCard>
          <CustomCard className=" col-span-4" loading={loading}>
            <CustomIcon
              icon={creditCard}
              className="bg-blue-100 rounded-full"
            />
            <h3 className="font-bold text-gray-500 text-xl">
              {totalTransactions.totalTransaction}
            </h3>
            <p className="text-sm text-gray-400">Transactions</p>
          </CustomCard>
          <div className="row-start-2 col-span-8 h-full gap-5 grid grid-cols-12">
            <CustomCard className="col-span-4" loading={loading}>
              <CustomIcon
                icon={calendar}
                className="bg-yellow-100 rounded-full"
              />
              <h3 className="font-bold text-gray-500 text-xl">
                {panierMoyen.panierMoyen}€
              </h3>
              <p className="text-sm text-gray-400">Panier moyen</p>
            </CustomCard>
            <CustomCard className="col-span-4" loading={loading}>
              <CustomIcon icon={share} className="bg-green-100 rounded-full" />
              <h3 className="font-bold text-gray-500 text-xl">
                {actifInfluencers.onlineInfluencers}
              </h3>
              <p className="text-sm text-gray-400">actifs influencers</p>
            </CustomCard>
            <CustomCard className="col-span-4" loading={loading}>
              <CustomIcon
                icon={navigation}
                className="bg-red-100 rounded-full"
              />
              <h3 className="font-bold text-gray-500 text-xl">
                {totalInfluencers.totalInfluencers}
              </h3>
              <p className="text-sm text-gray-400">Total influencers</p>
            </CustomCard>
          </div>
          <CustomCard
            loading={loading}
            className="col-span-4 text-center row-span-2 h-full flex  items-center justify-start p-6"
          >
            <div className="w-4/5 h-4/5">
              <CustomCircularChart taux={taux?.averageTaux} />
            </div>
          </CustomCard>
        </div>

        <h2 className="text-lg font-semibold w-[90%] text-[#2E2E4D] my-6">
          Insights
        </h2>
        {/* Insights Cards */}
        <div className="grid grid-cols-12  items-center h-[50vh] gap-5 justify-center w-[90%]">
          <CustomCard
            loading={loading}
            className="col-span-6 px-10 grid grid-cols-2"
          >
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon
                icon={smartphone}
                className="bg-rose-100 rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestDevice.bestDevice}
                </h3>
                <p className="text-sm text-gray-400">
                  Appareil la plus utilisée
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon icon={target} className="bg-rose-100 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestColor.color?.name_fr}
                </h3>
                <p className="text-sm text-gray-400">Meilleur couleur</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon icon={award} className="bg-green-100 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestCategory.category?.text_fr}
                </h3>
                <p className="text-sm text-gray-400">Meilleur categorie</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon
                icon={calendar}
                className="bg-yellow-100 rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestDay?.bestDay}
                </h3>
                <p className="text-sm text-gray-400">
                  Meilleur jour de la semaine
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon icon={packages} className="bg-blue-100 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestProduct.product?.id}
                </h3>
                <p className="text-sm text-gray-400">Meilleur produit</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-start">
              <CustomIcon icon={sun} className="bg-blue-100 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500 text-xl">
                  {bestPartOfDay?.bestPartOfDay}
                </h3>
                <p className="text-sm text-gray-400">Meilleur moment du jour</p>
              </div>
            </div>
          </CustomCard>
          <CustomCard
            loading={loading}
            className="col-span-3 flex flex-col d-center justify-start p-0"
          >
            <div className="bg-red-100 h-2/3 flex items-end justify-center w-full">
              <img
                src={france}
                alt=""
                className="object-cover overflow-hidden"
              />
            </div>
            <div className="flex flex-col h-1/2 items-center justify-center">
              <h3 className="font-bold text-stone-600 text-3xl">
                {bestCountry.countryCode}
              </h3>
              <p className="text-md text-gray-400 font-semibold">Meilleur</p>
              <p className="text-md text-gray-400 font-semibold">Pays</p>
            </div>
          </CustomCard>
          <CustomCard
            loading={loading}
            className="col-span-3 flex flex-col d-center justify-start p-0"
          >
            <div className="bg-red-100 h-2/3 flex items-end justify-center w-full">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="flex flex-col h-1/2 items-center justify-center">
              <h3 className="font-bold text-stone-600 text-3xl">
                {bestInfluencer?.influencer}
              </h3>
              <p className="text-md text-gray-400 font-semibold">Meilleur</p>
              <p className="text-md text-gray-400 font-semibold">Influenceur</p>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
