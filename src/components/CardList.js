import React, { useEffect, useState } from "react";
import { getSkipsByLocation } from "../services/skipService";
import { NoSymbolIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";

export default function CardList({ preselectedSkip, onSelect, onTotalPriceChange }) {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadSkips();
  }, []);

  const loadSkips = async () => {
    setLoading(true);
    try {
      const data = await getSkipsByLocation("NR32", "Lowestoft");
      setSkips(data);

      if (!preselectedSkip && data.length > 0) {
        handleSelect(data[0]);
      }
    } catch (error) {
      console.error("Error fetching skips:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (preselectedSkip) {
      calculateAndSetTotalPrice(preselectedSkip);
    }
  }, [preselectedSkip]);

  const handleSelect = (skip) => {
    onSelect(skip);
    calculateAndSetTotalPrice(skip);
  };

  const calculateAndSetTotalPrice = (skip) => {
    const totalPrice = calculateTotalPrice(skip);
    onTotalPriceChange(totalPrice);
  };

  const calculateTotalPrice = (skip) => {
    const basePrice = parseFloat(skip.price_before_vat);
    const vatMultiplier = 1 + parseFloat(skip.vat) / 100;
    const transportCost = parseFloat(skip.transport_cost || 0);
    return (basePrice * vatMultiplier) + transportCost;
  };
  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skips.map((skip) => {
        const totalPrice = calculateTotalPrice(skip);
        const pricePerDay = (totalPrice / skip.hire_period_days).toFixed(2);

        return (
          <div
            key={skip.id}
            className={`p-4 border rounded-md shadow cursor-pointer transition-transform bg-secondary text-light ${
              preselectedSkip?.id === skip.id ? "border-accent transform scale-105" : ""
            }`}
            onClick={() => handleSelect(skip)}
          >
            <div className="relative group">
              <img 
                className="w-full h-40 md:h-48 object-cover rounded-md" 
                src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`} 
                alt={`${skip.size} yarder skip`}
              />
              
              {!skip.allowed_on_road && (
                <div className="absolute bottom-2 left-2 px-3 py-1 rounded-md bg-yellow-500/70 text-red-500 flex items-center space-x-1">
                  <NoSymbolIcon className="h-5 w-5" />
                  <span>Not Allowed on Road</span>
                </div>
              )}

              {!skip.allows_heavy_waste && (
                <div className="absolute top-2 right-2 px-3 py-1 rounded-md bg-black text-yellow-500 flex items-center space-x-1">
                  <span>No Heavy Waste</span>
                  <ExclamationTriangleIcon className="h-5 w-5" />
                </div>
              )}
            </div>

            <h3 className="text-lg text-center font-semibold mt-2">{skip.size} Yard Skip</h3>
            <div className="flex flex-col items-center space-y-1 p-3 text-center">
              <p className="text-xl font-bold text-accent">
                £{pricePerDay} <span className="text-sm text-light">/ day</span>
              </p>
              {skip.transport_cost && (
                <p className="text-sm text-accent">Transport Cost: £{skip.transport_cost}</p>
              )}
              <p className="text-sm text-light">
                Total: <span className="font-semibold text-accent">£{totalPrice.toFixed(2)}</span> for {skip.hire_period_days} days
              </p>
              <p className="text-sm text-light">Includes VAT ({skip.vat}%)</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
