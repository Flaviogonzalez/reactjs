import { OrderActions } from "../reducers/order-reducer"


type TipPercentageFormProps = {
  dispatch: React.Dispatch<OrderActions> // codigo originalmente: React.Dispatch<React.SetStateAction<number>>
}
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

export default function TipPercentageForm({dispatch} : TipPercentageFormProps) {
    
  return (
    <div>
        <h3 className="text-3xl mb-7">Propina</h3>

        <form action="">
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2">
                    <input type="radio" id={tip.id} name="tip" value={tip.value} onChange={e => dispatch({type: 'add-tip', payload: {value: +e.target.value}})} />
                    <label htmlFor={tip.id}>{tip.label}</label>
                </div>

            ))}
        </form>
    </div>
  )
}
