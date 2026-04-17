interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

console.log(sumMajorCredits({ credits: 3 } as MajorCredits, { credits: 4 } as MajorCredits));
console.log(sumMinorCredits({ credits: 2 } as MinorCredits, { credits: 1 } as MinorCredits));
