import Counter from "./counter";

const Counters = ({ onReset, onIncrement, onDelete, counters, onDecrement }) => {
  return (
    <>
      <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </>
  );
};

// export default Counters;
// class Counters extends Component {

//   render() {
//     const {onReset,onIncrement,onDelete,counters} = this.props;
//     return (
//       <>
//         <button
//           className="btn btn-secondary btn-sm m-2"
//           onClick={onReset}
//         >
//           Reset
//         </button>
//         {counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onDelete={onDelete}
//             onIncrement={onIncrement}
//           />
//         ))}
//       </>
//     );
//   }
// }

export default Counters;