
function Input({ name, onChange }: { name: string, onChange?: () => void }) {
  return (
    <input name={name} onChange={onChange}
      className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-2 border-solid rounded-md outline-none active:outline-none border-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
    />
  )
}

export default Input