import numpy as np
from abc import ABC, abstractmethod
from .interface import Interface


class Environment(ABC):

    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @abstractmethod
    def __init__(self, interface: Interface, params):
        self.interface = interface
        self.params = params

    # Get current variable
    @abstractmethod
    def get_var(self, var: str):
        pass

    # Set variable
    @abstractmethod
    def set_var(self, var: str, x):
        pass

    # Get observation
    @abstractmethod
    def get_obs(self, obs: str):
        pass

    def get_vars(self, vars: list[str]) -> list:
        values = []
        for var in vars:
            values.append(self.get_var(var))

        return values

    def set_vars(self, vars: list[str], values: list):
        assert len(vars) == len(
            values), 'Variables and values number mismatch!'

        for idx, var in enumerate(vars):
            self.set_var(var, values[idx])

    def get_obses(self, obses: list[str]) -> list:
        values = []
        for obs in obses:
            values.append(self.get_obs(obs))

        return values