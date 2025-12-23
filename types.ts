
export enum ProcessingStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export enum AlgorithmType {
  DIRECT = 'Direct Recognition',
  HE = 'Histogram Equalization',
  DCP = 'Dark Channel Prior (Proposed)'
}

export interface RecognitionResult {
  plateNumber: string;
  color: string;
  confidence: number;
  latency: number;
  algorithm: AlgorithmType;
  processedImageUrl: string;
  timestamp: string;
}

export interface BenchmarkData {
  fogDensity: number;
  directAcc: number;
  heAcc: number;
  dcpAcc: number;
}
