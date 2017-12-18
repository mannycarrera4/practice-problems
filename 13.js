/**
 * RNA Transcription
 */
const DNAtoRNAMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

function dna2rna(dnaString) {
  const DNALetters = dnaString.split("")
  for (var i = 0; i < DNALetters.length; i++) {
    const DNALetter = DNALetters[i]
    console.log(DNAtoRNAMap[DNALetter])
  }
}


console.log(dna2rna("GCTAAAGCTA"))
