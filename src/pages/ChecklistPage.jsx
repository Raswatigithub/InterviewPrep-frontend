import LogisticsChecklist from '../components/LogisticsChecklist';
import { usePrep } from '../context/usePrep';

export default function ChecklistPage() {
  const { checkedItems, logisticsData, setCheckedItems } = usePrep();

  return (
    <LogisticsChecklist
      checkedItems={checkedItems}
      items={logisticsData}
      onToggle={(id) =>
        setCheckedItems((current) => ({
          ...current,
          [id]: !current[id],
        }))
      }
    />
  );
}
