export type MeterRegistryType = {
  createCounter: (name: string, help: string, labels: string[]) => CounterType;
  createGauge: (name: string, help: string, labels: string[]) => GaugeType;
  createHistogram: (
    name: string,
    help: string,
    labels: string[],
    buckets?: number[],
  ) => HistogramType;
};

export type CounterType = {
  increment: (value?: number, labels?: Record<string, string>) => void;
  reset: () => void;
};

export type GaugeType = {
  set: (value: number, labels?: Record<string, string>) => void;
};

export type HistogramType = {
  observe: (value: number, labels?: Record<string, string>) => void;
};
