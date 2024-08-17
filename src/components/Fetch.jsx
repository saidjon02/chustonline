import { useEffect, useState } from "react";

function Fetch(url) {
  const [empty, setEmpty] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setEmpty(json));
  }, []);
  const [ish, setIsh] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setIsh(json));
  }, []);
  const [idea, setIdea] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setIdea(json));
  }, []);
  const [add, setAdd] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setAdd(json));
  }, []);
  return { empty, ish, idea, add };
}

export default Fetch;
