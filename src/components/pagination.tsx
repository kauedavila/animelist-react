import clsx from "clsx";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = (props) => {
  const { limit, total, offset, setOffset } = props;

  const current = offset ? offset / limit + 1 : 1;
  const pagemax = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <div className="flex justify-center gap-[4%] w-full">
      <button
        onClick={() => current !== 1 && setOffset(offset - limit)}
        className={clsx(" aspect-square w-[50px] rounded-lg", {
          "bg-gray-700 text-black": current === 1,
          "bg-gray-200 text-black": current !== 1,
        })}
        disabled={current === 1}
      >
        {"<"}
      </button>
      {Array.from({ length: Math.min(MAX_ITEMS, pagemax - first + 1) })
        .map((_, index) => index + first)
        .map((page) => (
          <p key={page} className="list-style-off">
            <button
              onClick={() => setOffset((page - 1) * limit)}
              className={clsx("aspect-square w-[50px] rounded-lg", {
                "bg-gray-900 text-white ": page === current,
                "bg-gray-200 text-black": page !== current,
              })}
            >
              {page}
            </button>
          </p>
        ))}
      <button
        onClick={() => setOffset(offset + limit)}
        className={clsx(" aspect-square w-[50px] rounded-lg", {
          "bg-gray-700 text-black": current === pagemax,
          "bg-gray-200 text-black": current !== pagemax,
        })}
        disabled={current === pagemax}
      >
        {">"}
      </button>
    </div>
  );
};
