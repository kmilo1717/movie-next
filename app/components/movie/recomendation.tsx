
export default function recomendation({name, url}: {name: string, url: string}) {
  return (
    <div className="w-44 bg-[#3A3A3A] text-white rounded-lg shadow mx-6">
      <a href="#">
        <img className="rounded-t-lg" src={url} alt="" />
      </a>
      <div className="px-5 py-2">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight">{name}</h5>
        </a>
      </div>
    </div>

  )
}
